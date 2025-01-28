import { fetchGetCars } from "api/getCars"
import { CarModel } from "./props"

export const handlePreviousItem = async (carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
  try {
    let response = null
    if(carData && carData?.id > 1) {
      response = await fetchGetCars(carData.id - 1)
      console.log(response)
    } 

    if(response) {
      setCarData(response)
    }

  } catch (error) {
    console.log('erro ao chamar api', error)
  }
}

export const handleNextItem = async (carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
  try {
    let response = null
    if(carData && carData?.id < 10) {
      response = await fetchGetCars(carData.id + 1)
      console.log(response)
    } 

    if(response) {
      setCarData(response)
    }

  } catch (error) {
    console.log('erro ao chamar api', error)
  }
}

export const loadCarData = async (id: number, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
  try {
    const response = await fetchGetCars(id)
    console.log(response)
    if(response) {
      setCarData(response)
    }
  } catch (error) {
    console.log('Error ao buscar da Api', error)
    setCarData(null)
  }
}