export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string
    unAuthenticatedEntryPath: string
    tourPath: string
    locale: string
    enableMock: boolean
  }
  
  const appConfig: AppConfig = {
    apiPrefix: 'https://alive-cyan-girdle.cyclic.app',
    // apiPrefix: 'http://localhost:3001',
    authenticatedEntryPath: '/app/dashboard',
    unAuthenticatedEntryPath: '/sign-in',
    tourPath: '/app/account/kyc-form',
    locale: 'en',
    enableMock: false,
  }
  
  export default appConfig
  