import { useState } from 'react';

function useLoading() {

    const [liveRequests, setLiveRequests] = useState(0);

    function addRequest() {
        setLiveRequests(liveRequests => {
            // console.log(`addRequest ${liveRequests}`);
            return liveRequests + 1;
        });
    }

    function removeRequest() {
        setLiveRequests(liveRequests => {
            // console.log(`removeRequest ${liveRequests}`);
            return liveRequests - 1;
        });
    }

    function isLoading() {
        // console.log(`isLoading ${liveRequests}`);
        return liveRequests > 0;
    }

    return [addRequest, removeRequest, isLoading];
}

export default useLoading;