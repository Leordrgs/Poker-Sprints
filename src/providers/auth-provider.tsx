import { LoginSuccessResponse } from '@/domain/login'
import { User } from '@/domain/user'
import { useToast } from '@/hooks/use-toast'
import api from '@/services/api'
import { isAxiosError } from 'axios'
import { createContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
interface Session {
  token: string
  user: User
}

interface Credentials {
  email: string
  password: string
}

export interface AuthContextProps {
  session?: Session | null
  isAuthenticated: boolean
  isLoading: boolean
  signIn: (
    provider: 'google' | 'github' | 'credentials',
    options?: Credentials
  ) => Promise<void>
  signOut: () => Promise<void>
  validateSession: (token: string) => Promise<void>
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  signIn: async () => {},
  signOut: async () => {},
  session: null,
  isLoading: false,
  validateSession: async () => {},
})

const TOKEN_COOKIE = 'sprint-poker.token'
const SESSION_COOKIE = 'sprint-poker.session'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { toast } = useToast()
  const [session, setSession] = useState<Session | null | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [{ [SESSION_COOKIE]: sessionCookie }, setCookie] = useCookies([
    TOKEN_COOKIE,
    SESSION_COOKIE,
  ])

  const signInWithGoogle = () => {
    window.open(
      `${import.meta.env.VITE_API_URL}/api/auth/google`,
      '_self',
      'noopener,noreferrer'
    )
  }

  const signInWithGithub = () => {
    window.open(
      `${import.meta.env.VITE_API_URL}/api/auth/github`,
      '_self',
      'noopener,noreferrer'
    )
  }

  const signInWithCredentials = async ({
    email,
    password,
  }: Credentials): Promise<Session | undefined> => {
    try {
      const response = await api.post<LoginSuccessResponse>('/api/auth/login', {
        email,
        password,
      })

      if (response.data.token) {
        api.defaults.headers.common['Authorization'] =
          `Bearer ${response.data.token}`
      }

      const session: Session = {
        token: response.data.token,
        user: {
          name: response.data.name,
          email: response.data.email,
          id: response.data.userId,
        },
      }

      return session
    } catch (error) {
      setSession(null)
      const err = isAxiosError(error)
      if (err) {
        toast({
          description: error.response?.data.message,
          variant: 'destructive',
        })
      }
    }
  }

  const signIn = async (
    provider: 'google' | 'github' | 'credentials',
    options?: Credentials
  ) => {
    let session: Session | undefined

    switch (provider) {
      case 'google':
        signInWithGoogle()
        break
      case 'github':
        signInWithGithub()
        break
      case 'credentials':
        session = await signInWithCredentials(options as Credentials)
        break
    }
    if (!session) return

    const stringSession = JSON.stringify(session)
    setCookie(SESSION_COOKIE, stringSession, { path: '/' })
    setCookie(TOKEN_COOKIE, session.token, { path: '/' })

    setSession(session)
  }

  async function validateSession(token: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    try {
      const response = await api.get<Session>('/api/auth/validate-token')

      if (response.data) {
        setSession(response.data)
      }

      if (!sessionCookie) {
        const stringSession = JSON.stringify(response.data)
        setCookie(SESSION_COOKIE, stringSession, { path: '/' })
        setCookie(TOKEN_COOKIE, response.data.token, { path: '/' })
      }
    } catch (error) {
      setSession(null)
      const err = isAxiosError(error)
      if (err) {
        toast({
          description: error.response?.data.message,
          variant: 'destructive',
        })
      }
    }
  }

  const signOut = async () => {
    setSession(null)
    setCookie(SESSION_COOKIE, '', { path: '/' })
    setCookie(TOKEN_COOKIE, '', { path: '/' })
    delete api.defaults.headers.common['Authorization']
  }

  useEffect(() => {
    if (sessionCookie) {
      setSession(sessionCookie)
    } else {
      setSession(null)
    }

    setIsLoading(false)
  }, [sessionCookie])

  useEffect(() => {
    if (sessionCookie) {
      api.defaults.headers.common['Authorization'] =
        `Bearer ${sessionCookie.token}`
    }
  }, [sessionCookie])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: session?.user.id !== undefined,
        signIn,
        signOut,
        session,
        isLoading,
        validateSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}