import center1 from '@/constant/center/center1';
import center2 from '@/constant/center/center2';
import center3 from '@/constant/center/center3';
import center4 from '@/constant/center/center4';
import center5 from '@/constant/center/center5';
import center6 from '@/constant/center/center6';
import center7 from '@/constant/center/center7';
import center8 from '@/constant/center/center8';
import center9 from '@/constant/center/center9';
import center10 from '@/constant/center/center10';

const makeTrainerData = (center, trainerName, setData) => {
  if (center === '1') {
    const TrainerData = center1.trainers.find(
      x => x.name === `${trainerName} 트레이너`,
    );

    return setData(TrainerData);
  }

  if (center === '2') {
    const TrainerData = center2.trainers.find(
      x => x.name === `${trainerName} 트레이너`,
    );

    return setData(TrainerData);
  }

  if (center === '3') {
    const TrainerData = center3.trainers.find(
      x => x.name === `${trainerName} 트레이너`,
    );

    return setData(TrainerData);
  }

  if (center === '4') {
    const TrainerData = center4.trainers.find(
      x => x.name === `${trainerName} 트레이너`,
    );

    return setData(TrainerData);
  }

  if (center === '5') {
    const TrainerData = center5.trainers.find(
      x => x.name === `${trainerName} 트레이너`,
    );

    return setData(TrainerData);
  }

  if (center === '6') {
    const TrainerData = center6.trainers.find(
      x => x.name === `${trainerName} 트레이너`,
    );

    return setData(TrainerData);
  }

  if (center === '7') {
    const TrainerData = center7.trainers.find(
      x => x.name === `${trainerName} 트레이너`,
    );

    return setData(TrainerData);
  }

  if (center === '8') {
    const TrainerData = center8.trainers.find(
      x => x.name === `${trainerName} 트레이너`,
    );

    return setData(TrainerData);
  }

  if (center === '9') {
    const TrainerData = center9.trainers.find(
      x => x.name === `${trainerName} 트레이너`,
    );

    return setData(TrainerData);
  }

  if (center === '10') {
    const TrainerData = center10.trainers.find(
      x => x.name === `${trainerName} 트레이너`,
    );

    return setData(TrainerData);
  }
};

export default makeTrainerData;
