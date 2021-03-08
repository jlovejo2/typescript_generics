import { MeetingResource } from './models/meetingResource';
import { ConferenceRoom, conferenceRoomData } from './models/conferenceRoom';
import { Building, buildingData } from './models/building';
import { PartyTent, partyTentData} from './models/partyTent'

function getBigRooms<T extends MeetingResource>(rooms: Array<T>, minSize: number): Array<T> {
  
  let bigRooms: Array<T> = [];

  rooms.forEach(r => {
    if (r.capacity > minSize) {
      bigRooms.push(r)
    }
  });

  return bigRooms;
}

//declaring function type
let getLargeRooms: <T extends MeetingResource>(rooms: Array<T>, minSize: number) => Array<T>

getLargeRooms = getBigRooms;

let largeRooms = getLargeRooms(conferenceRoomData, 30);

console.log(largeRooms)

// let bigRooms: Array<ConferenceRoom> = getBigRooms<ConferenceRoom>(conferenceRoomData, 20)

// console.log(bigRooms);


// function shortenArray<T>(data: Array<T>, amountToShorten: number): Array<T> {
//   return data.splice(amountToShorten, data.length);
// }

// let stringArray: string[] = ['Visual Basic', 'C++', 'Typescript', 'JavaScript'];

// let fewerLanguages = shortenArray<string>([1,2,3], 2);

// console.log(fewerLanguages);


