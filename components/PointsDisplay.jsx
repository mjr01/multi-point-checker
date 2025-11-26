export default function PointsDisplay({ results, address }) {
  return (
    <div>
      <h2>Wallet: {address}</h2>
      {results.map((result, index) => {
        if (result.error) return null;
        
        // Parse data sesuai struktur API masing-masing
        const points = result.data?.points || result.data?.xp || 0;
        const rank = result.data?.rank || '-';
        const breakdown = result.data?.breakdown || {};
        
        // Filter breakdown yang nilainya > 0
        const activeBreakdown = Object.entries(breakdown).filter(
          ([key, value]) => value > 0
        );

        return (
          <div key={index}>
            <img src={result.logo} alt={result.name} width={32} />
            <h3>{result.name}</h3>
            <p>Points/XP: {points}</p>
            <p>Rank: {rank}</p>
            {activeBreakdown.length > 0 && (
              <div>
                <h4>Breakdown:</h4>
                <ul>
                  {activeBreakdown.map(([key, value]) => (
                    <li key={key}>{key}: {value}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
