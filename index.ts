import axios from 'axios';

class PointsClient {
    private apiKey: string;
    private campaignId: string;
    private baseUrl: string;

    constructor(apiKey: string, campaignId: string) {
        this.apiKey = apiKey;
        this.campaignId = campaignId;
        this.baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://absinthe-assignment-api.vercel.app'
    }

    async distribute(eventName: string, pointsData: { points: number, address: string }) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/distribute-points`, 
                { eventName, pointsData }, 
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'api-key': this.apiKey,
                        'campaign-id': this.campaignId
                    }
                });
            return response.data;
        } catch (e) {
            throw new Error(`Error distributing points: ${e}`)
        }
    }

    async getPoints(address: string) {
        try {
            const response = await axios.get(`${this.baseUrl}/api/get-points`, {
              params: { address },
              headers: {
                'Content-Type': 'application/json',
                'api-key': this.apiKey,
                'campaign-id': this.campaignId
              },
            });
            return response.data;
        } catch (e) {
            throw new Error(`Error getting points: ${e}`);
        }
    }

    async getPointsByEvent(address: string, eventName: string) {
        try {
            const response = await axios.get(`${this.baseUrl}/api/get-points`, {
              params: { address, eventName },
              headers: {
                'Content-Type': 'application/json',
                'api-key': this.apiKey,
                'campaign-id': this.campaignId
              },
            });
            return response.data;
        } catch (e) {
            throw new Error(`Error getting points: ${e}`);
        }
    }
}

export default PointsClient