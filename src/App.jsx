import Navber from "./component/navber/Navber"
import './App.css'
import Banner from "./component/banner/Banner"
import Client from "./component/client/Client"
import Community from "./component/community/Community"
import { Unlock } from "./component/unlock/Unlock"
import Calender from "./component/calender/Calender"
import Review from "./component/review/Review"
import Detail from "./component/detail/Detail"
import Marketing from "./component/marketing/Marketing"

function App() {


  return (
    <>
    <Navber/>
    <Banner/>
    <Client/>
    <Community/>
    <Unlock/>
    <Detail/>
    <Calender/>
    <Review/>
    <Marketing/>
    </>
  )
}

export default App
