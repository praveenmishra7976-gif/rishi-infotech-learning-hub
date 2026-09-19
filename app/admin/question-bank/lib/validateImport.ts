export interface ImportError {
  row: number;
  message: string;
}

export function validateImport(data: any[]) {
  const errors: ImportError[] = [];

  data.forEach((row, index) => {
    const rowNo = index + 2;

    if (!row.subject)
      errors.push({
        row: rowNo,
        message: "Subject is required",
      });

    if (!row.chapter)
      errors.push({
        row: rowNo,
        message: "Chapter is required",
      });

    if (!row.question)
      errors.push({
        row: rowNo,
        message: "Question is required",
      });

    if (!row.option_a)
      errors.push({
        row: rowNo,
        message: "Option A missing",
      });

    if (!row.option_b)
      errors.push({
        row: rowNo,
        message: "Option B missing",
      });

    if (!row.option_c)
      errors.push({
        row: rowNo,
        message: "Option C missing",
      });

    if (!row.option_d)
      errors.push({
        row: rowNo,
        message: "Option D missing",
      });

    if (
      !["A", "B", "C", "D"].includes(
        String(row.correct_answer).trim()
      )
    ) {
      errors.push({
        row: rowNo,
        message:
          "Correct Answer must be A, B, C or D",
      });
    }

    if (
      row.difficulty &&
      !["Easy", "Medium", "Hard"].includes(
        row.difficulty
      )
    ) {
      errors.push({
        row: rowNo,
        message:
          "Difficulty must be Easy, Medium or Hard",
      });
    }
  });

  return errors;
}