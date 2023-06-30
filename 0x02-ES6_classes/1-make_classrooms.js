import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classRoomObjects = [];
  const class1 = new ClassRoom(19);
  const class2 = new ClassRoom(20);
  const class3 = new ClassRoom(34);
  classRoomObjects.push(class1);
  classRoomObjects.push(class2);
  classRoomObjects.push(class3);

  return classRoomObjects;
}
