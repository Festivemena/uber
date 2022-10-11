import Navbar from '../components/Navbar'
import Map from '../components/Map'
import LocationSelector from '../components/LocationSelector'
import Confirm from '../components/Confirm'


const style = {
  wrapper: `h-full w-full flex flex-col`,
  main: `h-full w-full flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-full w-[400px] ml-[1rem] mt-7 py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-y-scroll`,
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <div className={style.main}>
        <div className={style.mapContainer}>
        <Map />
        </div>
        <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          <LocationSelector />
          <Confirm />
        </div>
      </div>
      </div>
     
    </div>
  )
}
