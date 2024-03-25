export const server_calls = {
    get: async (): Promise<Response> => {
        const response = await fetch(`http://127.0.0.1:5000/api/ticket`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' // Corrected header name
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data from the server');
        }
        return response;
    },

    create: async (data: any = {}): Promise<any> => {
        const response = await fetch(`http://127.0.0.1:5000/api/ticket`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Failed to create new data on the server');
        }
        return await response.json();
    },

    update: async (id: string, data: any = {}): Promise<any> => {
        const response = await fetch(`http://127.0.0.1:5000/api/ticket/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Failed to update data on the server');
        }
        return await response.json();
    },

    delete: async (id: string): Promise<void> => {
        const response = await fetch(`http://127.0.0.1:5000/api/ticket/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        });
        if (!response.ok) {
            throw new Error('Failed to delete data from the server');
        }
    }
};
