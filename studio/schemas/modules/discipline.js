export default {
  type: 'discipline',
  name: 'discipline',
  type: 'array',
  of: [
    {type: 'string'}
  ],
  options: {
    list: [
      { value: 'printmaking', title: 'Printmaking' },
      { value: 'space', title: 'Access to Space' },
      { value: 'dyeing', title: 'Natural Dyeing' },
      { value: 'woodworking', title: 'Woodworking' },
      { value: 'ceramics', title: 'Ceramics' },
      { value: 'audio-production', title: 'Audio Production' },
      { value: 'transportation', title: 'Transportation' },
      { value: 'weaving', title: 'Weaving' },
      { value: 'sewing', title: 'Sewing' },
      { value: 'leatherwork', title: 'Leatherwork' },
      { value: 'fishing', title: 'Fishing' },
      { value: 'climbing', title: 'Climbing' },
      { value: 'ski-touring', title: 'Ski Touring' },
      { value: 'bike-touring', title: 'Bike Touring' },
      { value: 'camping', title: 'Camping' },
      { value: 'watersports', title: 'Watersports' },
      { value: 'cooking', title: 'Cooking' },
      { value: 'photography', title: 'Photography' },
      { value: 'gardening', title: 'Gardening' },
      { value: 'other', title: 'other' }
    ],
    layout: 'tags'
  }
}