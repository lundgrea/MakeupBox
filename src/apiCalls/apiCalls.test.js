import { fetchMakeup } from "./apiCalls";

describe('fetchMakeup', () => {
  let mockResponse;
  beforeEach(()=> {
    mockResponse = [
      {
          'api_featured_image': "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/047/original/open-uri20180708-4-e7idod?1531087336",
          'brand': "colourpop",
          'category': "lipstick",
          'created_at': "2018-07-08T22:01:20.178Z",
          'currency': "CAD",
          'description': "Blotted Lip Sheer matte lipstick that creates the perfect popsicle pout! Formula is lightweight, matte and buildable for light to medium coverage.",
          'id': 1047,
          'image_link': "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076",
          'name': "Blotted Lip",
          'price': "5.5",
          'price_sign': "$",
          'product_api_url': "http://makeup-api.herokuapp.com/api/v1/products/1047.json",
          'product_colors': (7) [{}, {}, {}, {}, {}, {}, {}],
          'product_link': "https://colourpop.com/collections/lippie-stix?filter=blotted-lip",
          'product_type': "lipstick",
          'rating': null,
          'tag_list': (2) ["Vegan", "cruelty free"],
          'updated_at': "2018-07-09T00:53:23.287Z",
          'website_link': "https://colourpop.com",
      }
    ]
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should call fetch with the correct url', () => {
    fetchMakeup('products.json?product_type=bronzer');
    expect(window.fetch).toHaveBeenCalledWith('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer')
  })


  it('should return a successful response (HAPPY)', () => {
    expect(fetchMakeup('products.json?product_type=bronzer')).resolves.toEqual(mockResponse)
  })

  it('should return an error (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(fetchMakeup('products.json?product_type=bronzer')).rejects.toEqual(Error('There was an error retreiving your makeup suggestions'))
  })

  it('should return an error if the promise rejects (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Failed to get makeup'))
    })
    expect(fetchMakeup('products.json?product_type=bronzer')).rejects.toEqual(Error('Failed to get makeup'))
  })
})
