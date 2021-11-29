const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '4258e9f1',
      i: 'tt0848228'
    }
  });

  console.log(response.data)
}

fetchData();