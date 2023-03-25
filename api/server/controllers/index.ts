import deepai from 'deepai'

deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

export const getSentiment = async (text: string) => {
  try {const resp = await deepai.callStandardApi("sentiment-analysis", {
    text: text,
  }) 
  console.log(resp)
  }
  
  catch (err) {
    console.log(err)
  }
  
}