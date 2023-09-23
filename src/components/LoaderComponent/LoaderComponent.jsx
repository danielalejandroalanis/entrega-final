import { Waveform } from "@uiball/loaders"

const LoaderComponent = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Waveform size={40} lineWeight={3.5} speed={1} color="white" />
    </div>
  )
}

export default LoaderComponent