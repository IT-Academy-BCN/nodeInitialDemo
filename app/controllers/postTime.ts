const postTime = (_req: any, res: any) => {
  const day = new Date()
  res.send(day)
}

export default postTime
