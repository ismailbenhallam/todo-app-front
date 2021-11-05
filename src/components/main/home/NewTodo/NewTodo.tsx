import { yupResolver } from "@hookform/resolvers/yup";
import { LibraryAddCheckOutlined } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { TodoPriorities, TodoPriorityNameKeys, TodoState } from "models/Todo";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { FormattedMessage, useIntl } from "react-intl";
import { useCreateTodo } from "redux/slices";
import * as yup from "yup";
import {
  AddButton,
  ButtonsContainer,
  Container,
  DescriptionTextArea,
  PrioritySelect,
  TitleTextField,
} from "./NewTodo.style";

const TITLE_MIN_CHARS = 3;

const NewTodo: FC = () => {
  const intl = useIntl();

  const newTodoSchema = yup.object().shape({
    title: yup
      .string()
      .trim()
      .required(
        intl.formatMessage({
          id: "newTodo.errors.emptyTitle",
        })
      )
      .min(
        TITLE_MIN_CHARS,
        intl.formatMessage(
          { id: "newTodo.errors.minLength" },
          { value: TITLE_MIN_CHARS }
        )
      ),
    description: yup.string().trim(),
  });

  const [{ loading }, createTodo] = useCreateTodo();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(newTodoSchema) });

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
        label={intl.formatMessage({ id: "newTodo.title.placeholder" })}
        loading={loading}
        disabled={loading}
        error={!!errors.title}
        helperText={errors.title && errors?.title?.message}
        {...register("title", {
          disabled: loading,
        })}
      />
      <DescriptionTextArea
        {...(register("description"), { disabled: loading })}
        multiline
        rows={2}
        loading={loading}
        disabled={loading}
        data-testid="description"
        label={intl.formatMessage({
          id: "newTodo.description.placeholder",
        })}
        color="secondary"
      />
      <ButtonsContainer>
        <FormControl fullWidth>
          <InputLabel id="new-todo-priority-select" color="secondary">
            {priorityLabel}
          </InputLabel>
          <PrioritySelect
            labelId="new-todo-priority-select"
            label={priorityLabel}
            loading={loading}
            disabled={loading}
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
          endIcon={<LibraryAddCheckOutlined />}
          loadingPosition="end">
          <FormattedMessage id="newTodo.addButton" />
        </AddButton>
      </ButtonsContainer>
    </Container>
  );
};

export default NewTodo;
