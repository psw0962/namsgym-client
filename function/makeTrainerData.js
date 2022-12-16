import center1 from '@/constant/center/center1';

const makeTrainerData = (center, trainerName, setData) => {
  if (center === '1') {
    const Trainerdata = center1.trainers.find(
      x => x.name === `${trainerName} 트레이너`,
    );

    return setData(Trainerdata);
  }
};

export default makeTrainerData;
