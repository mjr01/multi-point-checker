export const protocols = [
  {
    name: 'USDAI',
    logo: 'https://app.usd.ai/favicon/favicon.ico',
    apiUrl: 'https://api.usd.ai/usdai/wallet/'
  },
  {
    name: 'CAP',
    logo: 'https://cap.app/favicon.ico',
    apiUrl: 'https://api.cap.app/v1/caps/account/'
  },
  {
    name: 'Superform',
    logo: 'https://rewards.superform.xyz/favicon.ico',
    apiUrl: 'https://rewards.superform.xyz/api/proxy/rewards/summary/'
  }
];

export async function fetchAllPoints(address) {
  const fetchPromises = protocols.map(protocol => 
    fetch(protocol.apiUrl + address)
      .then(res => res.json())
      .then(data => ({ ...protocol, data, error: null }))
      .catch(error => ({ ...protocol, data: null, error: error.message }))
  );
  
  return Promise.all(fetchPromises);
}
