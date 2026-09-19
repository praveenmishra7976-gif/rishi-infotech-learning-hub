export const permissions = {

  super_admin: {
    dashboard: true,
    notes: true,
    quiz: true,
    ai: true,
    users: true,
    settings: true,
  },

  admin: {
    dashboard: true,
    notes: true,
    quiz: true,
    ai: true,
    users: false,
    settings: false,
  },

  teacher: {
    dashboard: true,
    notes: true,
    quiz: true,
    ai: false,
    users: false,
    settings: false,
  },

  student: {
    dashboard: false,
    notes: false,
    quiz: false,
    ai: false,
    users: false,
    settings: false,
  },

};