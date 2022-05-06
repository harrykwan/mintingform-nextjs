import { useState } from 'react'

export default function NavButton({
  pagenum,
  maxpagenum,
  nextpage,
  prevpage,
  submit,
}) {
  return (
    <div className="mt-5 mb-5">
      <div id="bottom-wizard">
        {pagenum > 0 && (
          <button
            onClick={prevpage}
            type="button"
            name="backward"
            className="backward mr-2"
          >
            Prev
          </button>
        )}

        {pagenum < maxpagenum && (
          <button
            onClick={nextpage}
            type="button"
            name="forward"
            className="forward mr-2"
          >
            Next
          </button>
        )}
        {pagenum == maxpagenum && (
          <button
            onClick={submit}
            type="submit"
            name="process"
            className="submit mr-2"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  )
}
