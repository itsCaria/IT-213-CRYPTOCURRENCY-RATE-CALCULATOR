const proxyURL = "https://romel-acopra.herokuapp.com/";

class CryptoAPI {

    // Query the REST API
    async queryAPI(currency, cryptocurrency ) {
        const url = await fetch(`${proxyURL}https://pro-api.coinmarketcap.com/v1/tools/price-conversion?amount=1&id=${cryptocurrency}&convert=${currency}&CMC_PRO_API_KEY=204baa1e-1057-4a5c-8901-8d4aefc94596`);

        const result = await url.json();

        return {
            result
        }
    }

    async getCryptoCurrenciesList() {
        const url = await  fetch(`${proxyURL}https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=204baa1e-1057-4a5c-8901-8d4aefc94596`);

        const cryptoCurrencies = await url.json();

        return {
            cryptoCurrencies
        }
    }
}