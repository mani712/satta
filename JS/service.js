const api_URL = 'https://satta-admin.onrender.com';

export async function fetchGameData() {
    try {
        // Using absolute path from project root
        const response = await fetch("./../data/data.json", {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.log('Error fetching game data:', error);
        return null;
    }
}

export async function fetchGameDisplayData() {
    try {
        const response = await fetch( api_URL + "/game_display", {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching display data:', error);
        return null;
    }
}

export async function loadHtmlFromFile(filePath) {
    try {
        // Use absolute path from project root
        const cleanPath = filePath.startsWith('/') ? filePath : `/${filePath}`;
        const response = await fetch(cleanPath);
        
        if (!response.ok) {
            throw new Error(`Failed to load HTML file: ${response.status}`);
        }
        
        return await response.text();
    } catch (error) {
        console.error('Error loading HTML:', error, filePath);
        return null;
    }
}

export async function fetchDigits(filePath) {
    try {
        const response = await fetch( api_URL + `/${filePath}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        if (!response.ok) {
            throw new Error(`Failed to load HTML file: ${response.status}`);
        }
        
        return await response.text();
    } catch (error) {
        console.error('Error loading HTML:', error, filePath);
        return null;
    }
}