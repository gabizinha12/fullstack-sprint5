import ServiceUtils from './ServiceUtils';

const ProductsService = {
    get() {
        // const url = '/data/products.json';
        const url = "https://5c056c28-5883-405c-9f30-3cd52ce03567.mock.pstmn.io/products";
        return ServiceUtils.handleResponse(fetch(url));
    },
};

export default ProductsService;