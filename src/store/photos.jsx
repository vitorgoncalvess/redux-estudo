import createAsyncSlice from './helper/createAsyncSlice';

const photos = createAsyncSlice({
  name: 'photos',
  fetchConfig: (page) => ({
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  }),
});

const fetchPhotos = photos.asyncAction;

export default photos.reducer;

export const getPhotos = (page) => async (dispatch) => {
  try {
    await dispatch(fetchPhotos(page));
  } catch (error) {}
};
