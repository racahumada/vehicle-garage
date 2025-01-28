import axios from "axios"
import { CarModel } from "components/CardView/PriceControls/props"
import { ENUM_BASE_URL } from "constants/EnumBaseUrl"

interface ApiResponse {
  cars: CarModel[]
}

export const fetchGetCars = async (id: number) => {
  try {
    const response = await axios.get<ApiResponse>(ENUM_BASE_URL.cars_api)
    const carData = response.data.cars.find((car) => car.id == id) || null
    return carData
  } catch (error) {
    console.log('Erro ao buscar dados da api', error)
    return null
  }
}