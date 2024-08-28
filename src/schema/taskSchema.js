import * as Yup from 'yup'

const store = {
  body: Yup.object({
    list_id: Yup.number().required(),
    task: Yup.string().min(4).max(255).required(),
    due_date: Yup.date().required(),
    check: Yup.boolean().required(),
  })
}

const index = {
  body: Yup.object({
    list_id: Yup.number().required(),
  })
}

const update = {
  body: Yup.object({
    task: Yup.string().min(4).max(255),
    due_date: Yup.date(),
    check: Yup.boolean(),
  }),
  params: Yup.object({
    id: Yup.number().required(),
  })
}

const deleteTask = {
  params: Yup.object({
    id: Yup.number().required(),
  })
}

export default {
  store,
  update,
  deleteTask,
  index
}
