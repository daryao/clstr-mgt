import axios from 'axios'
import { getCodeSandboxHost } from '@codesandbox/utils'

const apiPort = 3333
const previewUrl = `https://${getCodeSandboxHost(apiPort)}`

export async function fetchClusters() {
    try {
        const response = await axios.get(`${previewUrl}/api/clusters`)
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}

export async function fetchClusterInfo(id: string) {
    try {
        const response = await axios.get(`${previewUrl}/api/clusters/${id}`)
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}
