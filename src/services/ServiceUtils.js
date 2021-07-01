const ServiceUtils = {
    handleResponse(req) {
        return req.then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error(resp.json());
            }
        })
    }
}

export default ServiceUtils;