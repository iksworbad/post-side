export const formatSanitizerError = (errors) => errors.map(({ path, expected }) => `Expected ${path} to be ${expected}.`).join('\n');

export class BadRequestError extends Error {
    constructor(sanitizerFailures) {
        super(formatSanitizerError(sanitizerFailures));
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}

async function getResponseValue(res) {
    return res.text().then((text) => {
        try {
            return JSON.parse(text)
        } catch (e) {
            return text
        }
    })
}

const safeFetch = async (...args) => {
    const response = await fetch(...args);
    const body = await response.json();
    if (!response.ok) {
        throw new Error(body.message);
    }
    return body;
};

export async function handleApiResponse(res) {
    if (res.ok) {
        return getResponseValue(res)
    }
    return getResponseValue(res)
        .then(value => Promise.reject(value))
}

export class ApiService {
    constructor(apiUrl) { 
        this.apiUrl = apiUrl
    }

    async getUsers() {
        return safeFetch(`${this.apiUrl}/users`)
    }

    async getUser(id) {
        return safeFetch(`${this.apiUrl}/users/${id}`)
    }
    async getPost(id) {
        return safeFetch(`${this.apiUrl}/posts/${id}`)
    }
    async getComments(id) {
        return safeFetch(`${this.apiUrl}/comments?postId=${id}`)
    }
    async getUserPosts(id) {
        return safeFetch(`${this.apiUrl}/users/${id}/posts`)
    }
}