import "./AIBackground.css";

export default function AIBackground() {
  const hologramImage = new URL(
    "../assets/images/hologram.png",
    import.meta.url
  ).href;
  const networkImage = new URL(
    "../assets/images/neural-network.png",
    import.meta.url
  ).href;

  return (
    <div className="ai-background" aria-hidden="true">
      <div className="particles"></div>

      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      <div
        className="network network-left"
        style={{ backgroundImage: `url(${hologramImage})` }}
      ></div>
      <div
        className="network network-right"
        style={{ backgroundImage: `url(${networkImage})` }}
      ></div>
    </div>
  );
}
