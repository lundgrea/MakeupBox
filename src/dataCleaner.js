export const cleanedSearchResults = (productList) => {
  const cleanedData = productList.map(item => {
    return {
      id: item.id,
      brand: item.brand,
      category: item.category,
      description: item.description,
      img: item.image_link,
      name: item.name,
      price: item.price,
      tags: item.tag_list,
      color: item.product_colors
    }
  })
  return cleanedData
}

export const cleanedSearch = (responses) => {
  let search = responses.map(response => {
    if (response === 'lips') {
      return 'products.json?product_type=lipstick'
    }
    if (response === 'eyes') {
      return 'products.json?product_type=eyeliner'
    }
    if (response === 'face/body') {
      return 'products.json?product_type=foundation'
    }
    if (response === 'nails') {
      return 'products.json?product_type=nail_polish'
    }
    if (response === 'bronzed') {
      return 'products.json?product_type=bronzer'
    }
    if (response === 'bold') {
      return 'products.json?product_type=eyeshadow'
    }
    if (response === 'natural') {
      return 'products.json?product_type=eyebrow'
    }
    if (response === 'smokey') {
      return 'products.json?product_type=eyeshadow'
    }
    if (response === 'cruelty free') {
      return 'products.json?product_tags=cruelty+free'
    }
    if (response === 'organic') {
      return 'products.json?product_tags=Organic'
    }
    if (response === 'non-gmo') {
      return 'products.json?product_tags=Non-GMO'
    }
    if (response === 'vegan') {
      return 'products.json?product_tags=Vegan'
    }
  })
  return search
}


