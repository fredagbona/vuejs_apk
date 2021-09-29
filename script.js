new Vue({
    el: '#app',
    data: {
      name: 'Fred',
      course: "Cours d''Ingénieur Web",
      acceptancePeriod: '01-2019',
      defaultLastId: 3,
      students: [
        { id: 1, name: 'Peter', course: "Cours d''Ingénieur Web", acceptancePeriod: '01-2019' },
        { id: 2, name: 'Jacques', course: "Cours d''Ingénieur Web", acceptancePeriod: '11-2017' },
        { id: 3, name: 'Ishiki', course: "Cours d''Ingénieur Web", acceptancePeriod: '11-2017' }
      ],
      nextStudentId: 4
    },
    methods: {
      addStudent: function() {
        this.students.push({
            id: this.nextStudentId++,
            name: this.name,
            course: this.course,
            acceptancePeriod: this.acceptancePeriod
        })
        this.newStudentName = ''
      }
    }
  })