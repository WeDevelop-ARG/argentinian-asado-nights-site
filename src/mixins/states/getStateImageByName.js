import Texas from '../../assets/img/states/Texas.svg'

export const getStateImageByName = (name) => {
  let img

  switch (String(name).toLowerCase()) {
    case 'texas':
      img = Texas
      break
    default:
      break
  }

  return img
}
