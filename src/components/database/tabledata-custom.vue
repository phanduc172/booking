<template>
  <div class="table-responsive px-4 ">
    <table class="table table-hover align-middle">
      <thead class="text-secondary">
        <slot name="thead"></slot>
      </thead>
      <tbody>
        <slot name="tbody"></slot>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CTable",
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: separate !important;
  border-spacing: 0 16px;
}

thead {
  background-color: transparent;
}

thead th {
  background-color: transparent; 
  border: none;
  font-weight: 600;
  padding: 12px;
  color: #6a6a6a;
  font-weight: bold;
}

tbody tr {
  border: 1px solid #dee2e6;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: background 0.3s ease-in-out;
}

tbody tr:hover {
  background: #f8f9fa;
}

td {
  padding: 20px 12px;
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  border-right: 1px solid #dee2e6;
}

td:first-child {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-left: 1px solid #dee2e6;
}

td:last-child {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-right: 1px solid #dee2e6;
}
</style>
