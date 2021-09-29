import axios from 'axios';

const api_key = process.env.REACT_APP_GIPHYKEY;

/**
 * Searches GIFs on the Giphy API according to a search term
 * @param text the search term
 * @param limit max num of gifs (default '10')
 * @param lang language code (default 'en')
 * @return {Promise<*>} a list of gifs in the format `[{title: 'A Gif', url: 'https://giphy.com/etc'} ...]`
 */
export async function searchGif(text, limit = 10, lang = 'en') {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            'api_key': api_key,
            'q': text,
            'rating': 'pg'
        }
    });

    console.log(res)

    return res.data.data.map(
        ({title, images}) => ({title, url: images.original.url})
    );
}
