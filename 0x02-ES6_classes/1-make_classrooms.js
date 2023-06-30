import ClassRoom from "./0-classroom";

export default function initializeRooms() {
    const classRoomObjects = [];
    const class_1 = new ClassRoom(19);
    const class_2 = new ClassRoom(20);
    const class_3 = new ClassRoom(34);
    classRoomObjects.push(class_1);
    classRoomObjects.push(class_2);
    classRoomObjects.push(class_3);

    return classRoomObjects;
}
