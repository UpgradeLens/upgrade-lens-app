export default function Home() {
  return (
    <main style={{fontFamily: "system-ui", maxWidth: 900, margin: "60px auto", padding: 24}}>
      <h1>UpgradeLens</h1>
      <p>Soroban contract upgrade-diff auditor</p>
      <p>A release-review tool that compares deployed and candidate contract WASM plus interface metadata and highlights public-interface, storage, and authorization changes.</p>
      <p>Network: Testnet development configuration.</p>
    </main>
  );
}
