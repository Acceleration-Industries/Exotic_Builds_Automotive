let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwOTE1ODQzMiwianRpIjoiYWU0M2VmZjQtNDc3Ni00ZjY4LWE0NzAtMmQwOTY5NjFhMmFkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IkV4b3RpYyBCdWlsZHMgR2FyYWdlIiwibmJmIjoxNzA5MTU4NDMyLCJjc3JmIjoiYmY0ZGRkYjEtMDdiYS00MWE1LTg1N2MtNTY0ZDAwMGE3Y2ZkIiwiZXhwIjoxNzQwNjk0NDMyfQ.NIBiexnPCryl9i1DkVWEwHgHUjx7Ocm2Q-GS2Z8Iz9U"
export const serverCalls = {
    getShop: async () => {
        const response = await fetch(`https://exoticbuildsautomotive.onrender.com/api/shop`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status 
        }
        return await response.json()
    }
}