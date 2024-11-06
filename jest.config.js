export default {
    
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        //Permite que ficheros ts o tsx sean validados o testeados por Jest
    '^.+\\.(ts|tsx)$': ['ts-jest', {
        // Ruta al archivo de configuración de TypeScript para Jest
        tsconfig: 'jest.tsconfig.json', 
    }]},
    rootDir: 'src',
    //Permite que Jest testee archivos del directorio src a partir de rutas absolutas
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
      },
}