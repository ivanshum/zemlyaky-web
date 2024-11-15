import * as React from "react"
import ReactVideo from "../components/reactvideo"
import Layout from "../components/layout"
import Seo from "../components/seo"
import useWindowSize from "../hooks/useWindowSize"
import DynamicHeader from "../components/dynamicHeader"
const IndexPage = () => {
  const { ar } = useWindowSize()
  return (
    <Layout>
      <div className={`react-player-wrapper h-screen w-full bg-[#00000080]`}>
        <ReactVideo
          width="100%"
          height="100%"
          playing={true}
          playsinline
          loop={true}
          muted={true}
          video={
            ar > 1
              ? `https://cdn.mustbefamily.com/main.mp4`
              : `https://cdn.mustbefamily.com/main_m.mp4`
          }
          poster={
            ar > 1
              ? `https://cdn.mustbefamily.com/main.jpg`
              : `https://cdn.mustbefamily.com/main_m.jpg`
          }
          className={`video`}
          alt={`Must Be Family шоурил`}
        />
      </div>
      <div
        className={`absolute top-0 left-0 h-screen w-full bg-[#00000080] flex justify-center items-center`}
      >
        <div>
          <DynamicHeader />
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
