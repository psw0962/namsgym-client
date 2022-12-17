import center1 from '@/constant/center/center1';

const makeTrainerData = (center, trainerName, setData) => {
  if (center === '1') {
    const TrainerData = center1.trainers.find(
      x => x.name === `${trainerName} 트레이너`,
    );

    return setData(TrainerData);
  }
};

export default makeTrainerData;
