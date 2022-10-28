let ipInfoUrl = "https://ipapi.co/json/";

async function getIpInfoLocation() {
  const getData = await fetch(ipInfoUrl);
  const ipInfo = await getData.json();
  return ipInfo;
}

let infoCurrency = await getIpInfoLocation();

const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
  currency: await infoCurrency.currency, //"EUR",
  style: "currency",
});

export function formatCurrency(number: number) {
  return CURRENCY_FORMAT.format(number);
}
