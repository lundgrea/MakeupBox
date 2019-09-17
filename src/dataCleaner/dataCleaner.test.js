import { cleanedSearchResults, cleanedSearch } from './dataCleaner';

describe('cleanedSearchResults', () => {
  it('should clean the search results, post-fetch', () => {
    const mockDirtyData = [
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
      'product_colors': (7)[{}, {}, {}, {}, {}, {}, {}],
      'product_link': "https://colourpop.com/collections/lippie-stix?filter=blotted-lip",
      'product_type': "lipstick",
      'rating': null,
      'tag_list': (2)["Vegan", "cruelty free"],
      'updated_at': "2018-07-09T00:53:23.287Z",
      'website_link': "https://colourpop.com",
    }
  ]
    const mockCleanData = [{
      'brand': "colourpop",
      'color': (7)[{}, {}, {}, {}, {}, {}, {}],
      'description': "Blotted Lip Sheer matte lipstick that creates the perfect popsicle pout! Formula is lightweight, matte and buildable for light to medium coverage.",
      'id': 1047,
      'img': "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076",
      'name': "Blotted Lip",
      'price': "5.5",
      'tags': (2)["Vegan", "cruelty free"],
      'type': "lipstick"
    }]
    expect(cleanedSearchResults(mockDirtyData)).toEqual(mockCleanData);
  });
});

describe('cleanedSearch', () => {
  it('should convert the data into fetchable information', () => {
    const mockDirtyData = ['lips', 'bold', 'vegan'];
    const mockCleanData = ['products.json?product_type=lipstick', 'products.json?product_type=eyeshadow', 'products.json?product_tags=Vegan'];
   expect(cleanedSearch(mockDirtyData)).toEqual(mockCleanData);
  });

  it('should convert the data into fetchable information', () => {
    const mockDirtyData = ['smokey', 'cruelty free', 'organic'];
    const mockCleanData = ['products.json?product_type=eyeshadow', 'products.json?product_tags=cruelty+free', 'products.json?product_tags=Organic'];
   expect(cleanedSearch(mockDirtyData)).toEqual(mockCleanData);
  });

  it('should convert the data into fetchable information', () => {
    const mockDirtyData = ['nails', 'bronzed', 'natural'];
    const mockCleanData = ['products.json?product_type=nail_polish', 'products.json?product_type=bronzer', 'products.json?product_type=eyebrow'];
   expect(cleanedSearch(mockDirtyData)).toEqual(mockCleanData);
  });

  it('should convert the data into fetchable information', () => {
    const mockDirtyData = ['eyes', 'face/body', 'non-gmo'];
    const mockCleanData = ['products.json?product_type=eyeliner', 'products.json?product_type=foundation', 'products.json?product_tags=Non-GMO'];
   expect(cleanedSearch(mockDirtyData)).toEqual(mockCleanData);
  });
});