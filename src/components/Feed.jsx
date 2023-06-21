import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../store/photos';
import FeedItem from './FeedItem';
import Loading from '../store/helper/Loading';

const Feed = ({ page }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
          {
            options: {
              method: 'GET',
              cache: 'no-store',
            },
          },
        );
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch, page]);

  return (
    <section className="flex flex-col items-end">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ul className="flex self-start flex-col gap-6 mt-6 animeLeft">
            {data?.map((photo) => (
              <FeedItem key={photo.id} photo={photo} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default Feed;
