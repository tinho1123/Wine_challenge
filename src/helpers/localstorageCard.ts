
interface Props {
  id?: number;
  image?: string;
  name?: string;
  price?: number;
  discount?: number;
  priceMember?: number;
  priceNonMember?: number;
  type?: string;
  classification?: number;
  size?: string;
  rating?: number;
  avaliations?: number;
  country?: string;
  region?: string;
  flag?: string;
  sommelierComment?: string;
  quantity?: number
}

export const localstorageCardSetItem = (item: Props) => {
  const car: Props[] = localStorage.getItem('wineCar') ? JSON.parse(localStorage.getItem('wineCar')!) : []
  car.push(item)
  localStorage.setItem('wineCar', JSON.stringify(car))
}

export const localstorageCardRemoveItem = (item: Props) => {
  const car: Props[] = JSON.parse(localStorage.getItem('wineCar')!)
  const filterCar = car.filter((carItem) => carItem.name !== item.name)
  localStorage.setItem('wineCar', JSON.stringify(filterCar))
}
