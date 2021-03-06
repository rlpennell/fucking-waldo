export default {
  name: 'levelScore',
  title: 'Level Score',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  type: 'object',
  fields: [
    {
      name: 'playerName',
      title: 'Player Name',
      type: 'string'
    },
    {
      name: 'time',
      title: 'Time',
      type: 'number'
    },
  ],
  preview: {
    select: {
      number: 'levelNumber',
      name: 'playerName',
      time: 'time'
    },
    prepare({ number, name, time}){
      return {
        title: `Level ${number}`,
        subtitle: `${name ? name : 'No highscore'} | ${time ? time : '-'}`
      }
    }
  }
}