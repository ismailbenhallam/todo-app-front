import { LibraryAddCheckOutlined } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { FormattedMessage, useIntl } from "react-intl";
import {
  TodoPriorities,
  TodoPriorityNameKeys,
  TodoState,
} from "../../../../models/Todo";
import { useCreateTodo } from "../../../../redux/slices";
import {
  AddButton,
  AlertDiv,
  ButtonsContainer,
  Container,
  DescriptionTextArea,
  PrioritySelect,
  TitleTextField,
} from "./NewTodo.style";

const NewTodo: FC = () => {
  const [{ loading }, createTodo] = useCreateTodo();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const intl = useIntl();

  const onSubmit = (data: any) => {
    reset();
    createTodo({
      id: -1,
      title: data.title.trim(),
      description: data.description?.trim(),
      priority: +data.priority,
      state: TodoState.WAITING,
    });
  };

  const priorityLabel = intl.formatMessage({
    id: "newTodo.priority.placeholder",
  });

  return (
    <Container data-testid="form" onSubmit={handleSubmit(onSubmit)}>
      <TitleTextField
        color="secondary"
        data-testid="title"
        label={intl.formatMessage({ id: "newTodo.title.placeholder" }) + "*"}
        loading={loading}
        {...register("title", {
          required: true,
          disabled: loading,
          validate: (value) => value.trim().length > 0,
        })}
      />
      <DescriptionTextArea
        {...(register("description"), { disabled: loading })}
        multiline
        rows={2}
        maxRows={4}
        loading={loading}
        data-testid="description"
        label={intl.formatMessage({
          id: "newTodo.description.placeholder",
        })}
        color="secondary"
      />
      <AlertDiv
        severity="warning"
        data-testid="error"
        visibility={errors.title}>
        <FormattedMessage id="newTodo.errors.emptyTitle" />
      </AlertDiv>
      <ButtonsContainer>
        <FormControl fullWidth>
          <InputLabel id="new-todo-priority-select" color="secondary">
            {priorityLabel}
          </InputLabel>
          <PrioritySelect
            labelId="new-todo-priority-select"
            label={priorityLabel}
            loading={loading}
            defaultValue="0"
            color="secondary"
            {...register("priority", { disabled: loading })}>
            {TodoPriorities.map((p) => (
              <MenuItem key={p} value={p}>
                {intl.formatMessage({ id: TodoPriorityNameKeys.get(p) })}
              </MenuItem>
            ))}
          </PrioritySelect>
        </FormControl>
        <AddButton
          variant="contained"
          loading={loading}
          disabled={loading}
          data-testid="button"
          type="submit"
          startIcon={<LibraryAddCheckOutlined />}>
          <FormattedMessage id="newTodo.addButton" />
        </AddButton>
      </ButtonsContainer>
    </Container>
  );
};

export default NewTodo;
