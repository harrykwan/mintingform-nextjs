export default function NavButton() {
  return (
    <div className="mt-5 mb-5">
      <div id="bottom-wizard">
        <button type="button" name="backward" className="backward mr-2">
          Prev
        </button>
        <button type="button" name="forward" className="forward mr-2">
          Next
        </button>
        <button type="submit" name="process" className="submit mr-2">
          Submit
        </button>
      </div>
    </div>
  )
}
