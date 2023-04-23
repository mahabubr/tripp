import * as SecureStore from 'expo-secure-store'

const tokenCache = {
    getToken(key) {
        try {
            return SecureStore.getItemAsync(key)
        } catch (e) {
            return null
        }
    },
    saveToken(key, value) {
        try {
            return SecureStore.setItemAsync(key, value)
        } catch (e) {
            return null
        }
    }
}

export default tokenCache